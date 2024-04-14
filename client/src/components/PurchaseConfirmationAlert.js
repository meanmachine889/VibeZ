import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap'; // Assuming you're using Bootstrap's Alert component

function PurchaseConfirmationAlert({ show, setShow }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [show, setShow]);

  return (
    <div className="fixed top-0 right-0 p-4 z-50">
      <Alert show={show} variant="success">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2">Your purchase has been confirmed!</span>
      </Alert>
    </div>
  );
}

export default function PurchaseConfirmation() {
  const [showAlert, setShowAlert] = useState(true);

  return <PurchaseConfirmationAlert show={showAlert} setShow={setShowAlert} />;
}
