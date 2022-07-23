const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <hr />
      <h4 style={{ fontSize: "18px", padding: "10px 0" }}>
        &copy;{" "}
        <a
          href="https://github.com/Jacobkyalo"
          target="_blank"
          style={{ textDecoration: "none", color: "#ff0000" }}
        >
          <span> Jack</span>
        </a>
      </h4>
    </footer>
  );
};

export default Footer;
