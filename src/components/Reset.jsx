function ResetButton() {
  const handleReset = async () => {
    let con = confirm("Are you sure you want to reset");
    if (con) {
      try {
        const response = await fetch("http://localhost:5000/reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the command.");
      }
    }
  };

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset All
    </button>
  );
}

export default ResetButton;
