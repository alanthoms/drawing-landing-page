import { useState } from "react";

function ProfilePic() {
  const [userNameInput, setUserNameInput] = useState();
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [error, setError] = useState(null);

  // Handles input changes
  const handleChange = (e) => {
    setUserNameInput(e.target.value);
  };

  // Handles search click to get status info
  const handleSearch = async () => {
    if (!userNameInput.trim()) {
      setError("Please enter a name.");
      setAvatarUrl(null);
      return;
    }
    setError(null); // Clear previous error
    const newUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=${userNameInput}`;
    setAvatarUrl(newUrl);
  };

  return (
    <div style={{ padding: "100px", maxWidth: "600px", margin: "auto" }}>
      <h1 className="text-3xl">User Profile Generator</h1>
      <input
        type="text"
        placeholder="Enter the name"
        value={userNameInput}
        onChange={handleChange}
        style={{ padding: "8px", width: "100%" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px",
          marginTop: "10px",
          width: "100%",
          border: "1px solid white",
        }}
      >
        Generate
      </button>

      {/* TODO: Display error message if there is an error */}
      <h1>{error && <h1> issue</h1>}</h1>

      {/* TODO: Display facts if it exists */}
      <div style={{ marginTop: "40px" }}>
        {avatarUrl ? (
          <div>
            <h2>Here is your adventurer:</h2>
            <img
              src={avatarUrl}
              alt="Avatar"
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #ddd",
              }}
            />
          </div>
        ) : (
          !error && <h2>Enter a name to see the magic.</h2>
        )}
      </div>
    </div>
  );
}

export default ProfilePic;
