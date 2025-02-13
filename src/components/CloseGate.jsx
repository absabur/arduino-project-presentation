function CloseButton() {
  const handleClose = async () => {
    let con = confirm("Are you sure you want to close the gate?");
    if (!con) {
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/close", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the command.");
    }
  };

  return <button className="close-button" onClick={handleClose}>Close Gate</button>;
}

export default CloseButton;