import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Badge } from "@mui/material";
import Link from "next/link";
export default function CartDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
const[quantity,setQuantity]=React.useState(1);
const increaseQuantity=()=>{
setQuantity(quantity+1);
}
const decreaseQuantity=()=>{
  if(quantity>=1){

    setQuantity(quantity-1);
  }
  }
  const toggleDrawer = (anchor, open) => (event) => {
    if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
    setState({ ...state, [anchor]: open });
  };
  const handleClick = () => {};
 const handleClear=()=>{
  setState({ ...state, ["right"]: false });
 }

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Badge
              badgeContent={4}
              className="text-pink-500"
              color="secondary"
              style={{ color: "pink" }}
            >
              <AiOutlineShoppingCart className="text-3xl text-pink-500" />
            </Badge>
          </Button>




          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
           
            <div className="bg-pink-400 h-full">
            <h2 className="text-center font-bold text-3xl">Cart</h2>
              <img
                width={"100px"}
                className="m-auto"
                height={"100px"}
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                alt="test"
              />

              <div className="info m-3 flex align-middle  justify-between" style={{alignItems:"center"}}>
              <Badge
              badgeContent={4}
              className="text-pink-500"
              color="secondary"
              style={{ color: "pink" }}
            >
                <img
                  width={"50px"}
                  height={"50px"}
                  className="mr-4"
                  src="https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/1/o/m-db1024-42-3bros-original-imagz8zkvwjtayrs.jpeg?q=70"
                  alt="test"
                />
            </Badge>
              
                <p className="font-bold text-2xl ml-1">
                  I Have 3 Moods Hoodie (S/Black)
                </p>
                <div className="flex justify-between gap-4 ml-8" style={{width:"80px"}}>
                  <button
                    onClick={decreaseQuantity}
                    className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                  >
                    -
                  </button>
                  <button
                    onClick={handleClick}
                    className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                  >
                    {quantity}
                  </button>
                  <button
                    onClick={increaseQuantity}
                    className="font-bold ml-1 cursor-pointer shadow-xl text-xl"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <h3 className="font-bold ml-3">subtotal :0</h3>
              </div>
              <div>
                <Link href={"/checkout"} onClick={()=> setState({ ...state, ["right"]: false })} className="p-2 bg-pink-500 text-white font-bold hover:bg-black m-1">
                  Checkout
                </Link>
                <Button onClick={handleClear} className="bg-pink-500 text-white font-bold hover:bg-black m-1">
                  Clear
                </Button>
              </div>
            </div>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
