import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
function Header() {
  return (
    <>
      <section className="sectionHeader">
        <div>
          <a href="" className="vinculosContactos">
            {" "}
            222 22 22{" "}
          </a>
          <a href="" className="vinculosContactos">
            (56)777 77 77
          </a>
          <a href="" className="vinculosContactos">
            happy@cake.cl
          </a>
        </div>
        <div>
          <SearchIcon className="vinculosContactos" style={{ fontSize: 35 }} />
          <input type="text" />
        </div>
      </section>
      <section className="sectionHeader2">
        <div className="div-sectionHolder2 inicio">
          <a href="" className="vinculosContactos redes">
            <InstagramIcon style={{ fontSize: 40 }} />
          </a>
          <a href="" className="vinculosContactos">
            <FacebookIcon style={{ fontSize: 40 }} />
          </a>
          <a href="" className="vinculosContactos">
            <YouTubeIcon style={{ fontSize: 40 }} />
          </a>
        </div>
        <div className="div-sectionHolder2 medio">
          <img
            className="logo"
            src="https://cdn.shopify.com/s/files/1/0602/6782/3242/files/Logo_com_0e21f118-1c8f-4766-a8c7-e01e6ba0215c.png?v=1666701401"
            alt=""
          />
        </div>
        <div className="div-sectionHolder2 final">
          <AddShoppingCartIcon
            className="vinculosContactos"
            style={{ fontSize: 50 }}
          />
        </div>
      </section>
    </>
  );
}

export default Header;
