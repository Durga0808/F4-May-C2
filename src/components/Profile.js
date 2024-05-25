import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';

const Profile = ({ token, id }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const userData = await response.json();

        if (response.ok) {
          setUser(userData);
        } else {
          setError(userData.message || 'Failed to fetch user data');
        }
      } catch (error) {
        setError('An error occurred, please try again');
      }
    };

    if (token && id) {
      fetchUser();
    }
  }, [token, id]);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      {user ? (
        <div className="profile-info">
          <p>Name: {user.firstName} {user.lastName}</p>
          <p>Maiden Name: {user.maidenName}</p>
          <p>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Username: {user.username}</p>
          <p>Birth Date: {user.birthDate}</p>
          <p>Image: <img src={user.image} alt="User" /></p>
          <p>Blood Group: {user.bloodGroup}</p>
          <p>Height: {user.height}</p>
          <p>Weight: {user.weight}</p>
          <p>Eye Color: {user.eyeColor}</p>
          <p>Hair Color: {user.hair.color}</p>
          <p>Hair Type: {user.hair.type}</p>
          <p>IP Address: {user.ip}</p>
          <p>Address: {user.address.address}, {user.address.city}, {user.address.state}, {user.address.postalCode}</p>
          <p>Mac Address: {user.macAddress}</p>
          <p>University: {user.university}</p>
          <p>Bank Card Expire: {user.bank.cardExpire}</p>
          <p>Bank Card Number: {user.bank.cardNumber}</p>
          <p>Bank Card Type: {user.bank.cardType}</p>
          <p>Bank Currency: {user.bank.currency}</p>
          <p>Bank IBAN: {user.bank.iban}</p>
          <p>Company Department: {user.company.department}</p>
          <p>Company Name: {user.company.name}</p>
          <p>Company Title: {user.company.title}</p>
          <p>Company Address: {user.company.address.address}, {user.company.address.city}, {user.company.address.state}, {user.company.address.postalCode}</p>
          <p>EIN: {user.ein}</p>
          <p>SSN: {user.ssn}</p>
          <p>User Agent: {user.userAgent}</p>
          <p>Crypto Coin: {user.crypto.coin}</p>
          <p>Crypto Wallet: {user.crypto.wallet}</p>
          <p>Crypto Network: {user.crypto.network}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Profile;
