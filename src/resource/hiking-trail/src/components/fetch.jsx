fetch('http://localhost:5000/users/create', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(
      (result) => {
        alert(result['message'])
        if (result['status'] === 'ok') {
          window.location.href = '/';
        }
      }
    )
}