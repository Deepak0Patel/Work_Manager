async function taketime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

async function Profile() {
  await taketime();

  return <div>profile page</div>;
}

export default Profile;
