fetch("/theme/data.json")
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    console.log(data);
   localStorage.setItem("data",data)
  });
