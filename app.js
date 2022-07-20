async function contacts() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");

    let result = await res.json();
    console.log(result);

    var player = "<h2>Lists of Users</h2>";
    result.forEach(function (user) {
      let para = document.createElement("p");
      para.className = "newbox";
      player += `<div class="player">
                        <div class="strength">Name : ${user.name}</div>
                        <div>Email   : ${user.email}</div>
                        <div>Phone   : ${user.phone}</div>
                        <div>Website : ${user.website}</div>
                        <div>Company : ${user.company.name}</div>
                        <div>City    : ${user.address.city}</div>
                        <div>Zipcode : ${user.address.zipcode}</div>
                        </div>`;
    });

    document.getElementById("message").innerHTML = player;
  } catch (error) {}
}
