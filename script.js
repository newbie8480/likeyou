function showResult(answer) {
  if (answer === 'No') {
    document.getElementById('noButton').style.opacity = '0';
    setTimeout(() => {
      document.getElementById('noButton').style.display = 'none';
    }, 500); // Hide 'No' button after 0.5 seconds
  } else if (answer === 'Yes') {
    window.location.href = 'file:///D:/yes/index.html'
    // You can add actions for 'Yes' here, like showing a message or redirecting to another page
    
  }
}
