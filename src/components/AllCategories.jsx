// import React from 'react';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
// import Grow from '@material-ui/core/Grow';
// import Paper from '@material-ui/core/Paper';
// import Popper from '@material-ui/core/Popper';
// import MenuList from '@material-ui/core/MenuList';
// import { makeStyles } from '@material-ui/core/styles';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import './AllCategories.css'


// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   paper: {
//     marginRight: theme.spacing(2),
//   },
// }));

// function AllCategories() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event) => {
//     if (anchorRef.current && anchorRef.current.contains(event.target)) {
//       return;
//     }

//     setOpen(false);
//   };

//   function handleListKeyDown(event) {
//     if (event.key === 'Tab') {
//       event.preventDefault();
//       setOpen(false);
//     }
//   }

//   // return focus to the button when we transitioned from !open -> open
//   const prevOpen = React.useRef(open);
//   React.useEffect(() => {
//     if (prevOpen.current === true && open === false) {
//       anchorRef.current.focus();
//     }

//     prevOpen.current = open;
//   }, [open]);

//   return (
//     <div className={classes.root} style = {{display: "inline"}}>
      
//       <span>
        
          
       
//         <span
//         ref={anchorRef}
//           aria-controls={open ? 'menu-list-grow' : undefined}
//           aria-haspopup="true"
//           onClick={handleToggle}
//         >
//               <span>
//                   <button className = "all-categories">
//                    <b>ALL CATEGORIES</b>
//                     <ExpandMore fontSize = "large" />
//                   </button>
//               </span>
//         </span>
        
//         <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
//           {({ TransitionProps, placement }) => (
//             <Grow
//               {...TransitionProps}
//               style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
//             >
//               <Paper>
//                 <ClickAwayListener onClickAway={handleClose}>
//                 <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className = "allcatw">
                  
//                   <h5>No notifications </h5>
//                   <p>Check back here for updates!</p>
                  
//                 </MenuList>
//                 </ClickAwayListener>
//               </Paper>
//             </Grow>
//           )}
//         </Popper>
//       </span>
//     </div>
//   );
// }

// export default AllCategories;


// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import Fade from '@material-ui/core/Fade';
// import './AllCategories.css'

// function AllCategories() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick} className = "all-categories">
//          <b>ALL CATEGORIES</b>
//           <ExpandMore fontSize = "large" />
//       </button>
//       <Menu
//         id="fade-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={open}
//         onClose={handleClose}
//         TransitionComponent={Fade}
//         className = "allcatw"
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>
//   );
// }

// export default AllCategories;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Menu from '@material-ui/core/Menu';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './AllCategories.css';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));


function AllCategories(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   const options = [
//   'Show some love to Material-UI',
//   'Show all notification content',
//   'Hide sensitive notification content',
// ];


  return (
    <div className={classes.root}>
      <List component="nav" aria-label="Device settings">
        <ListItem
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <button className = "all-categories">
              <b>ALL CATEGORIES</b>
              <ExpandMore fontSize = "large" />
          </button>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="allcatw"
      >
        {props.categories.map((option, index) => (
          <Link 
            className = "items"
            to = {`/${option}`}
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option.name}

            </Link>
        ))}
      </Menu>
    </div>
  );
}

// function optionInside(option) {
//   {props.categories.categories.map((single, index) => {
//               <Link 
//             className = "items"
//             to = {`/${option}`}
//             key={option}
//             disabled={index === 0}
//             selected={index === selectedIndex}
//             onClick={(event) => handleMenuItemClick(event, index)}
//               >
                
//               {single.category}
//               </Link>
//             })}
// }

const mapStateToProps = (state) => ({
    categories: state.Categories.values
})
   
export default connect(mapStateToProps,null) (AllCategories);

