import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import SubItem from './SubItem';
import SubItemNavbar from './SubItemNavbar';
import Navbar from './Navbar';

const Subfolder = () => {
  const [subfolders, setSubfolders] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
   const tokenString = localStorage.getItem("token");
      const token = JSON.parse(tokenString);

  const fetchSubfolders = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/subfolders/${id}`,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
        },
      });
      console.log("subfolders", response.data);
      setSubfolders(response.data);
    } catch (error) {
      console.error('Error fetching subfolders:', error);
    }
  };

  useEffect(() => {
    fetchSubfolders();
  }, [id]);

  const handleSubfolderClick = (subfolderId) => {
    navigate(`/folder/${subfolderId}`);
  };

  return (
    <div>
        <Navbar/>
      <SubItemNavbar refreshSubfolders={fetchSubfolders} />
      {subfolders.length > 0 ? (
        <div className="subfolders-list">
          {subfolders.map((subfolder) => (
            <SubItem
              key={subfolder.id}
              subfolder={subfolder}
              onClick={handleSubfolderClick}
            />
          ))}
        </div>
      ) : (
        <p>No subfolders found.</p>
      )}
    </div>
  );
};

export default Subfolder;
