import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

const SubItemNavbar = ({ refreshSubfolders }) => {
  const { id: parentId } = useParams();

  const handleCreateFolder = async () => {
    const folderName = prompt('Enter folder name:');
    if (!folderName) return;

    try {
      const tokenString = localStorage.getItem("token");
      const token = JSON.parse(tokenString);

      await axios.post(
        `http://localhost:3000/api/subfolders/${parentId}`,
        { name: folderName },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`,
          },
        }
      );
      console.log('Folder created successfully');

      refreshSubfolders(); // Refresh the list of subfolders after creation
    } catch (error) {
      console.error('Failed to create folder:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Navbar.Brand>Subfolder Navigation</Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="outline-primary" onClick={handleCreateFolder} className="me-2">
          Create Folder
        </Button>
        <Button variant="outline-secondary">Create File</Button>
      </Nav>
    </Navbar>
  );
};

export default SubItemNavbar;
