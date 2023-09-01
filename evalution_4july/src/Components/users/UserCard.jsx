const UserCard = ({src,name}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: "0.5rem"
      }}
      data-testid="user-card"
      >
      <img
        src={src}
        width="40px"
        style={{ borderRadius: "50%" }}
        data-testid="user-card-img"
      />
      <div data-testid="user-card-name">
        {name}
      </div>
    </div>
  );
};

export default UserCard;
