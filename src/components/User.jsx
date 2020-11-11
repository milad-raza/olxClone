import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import avatar from '../images/avatar.png';
import ExpandMore from '@material-ui/icons/ExpandMore';
import './User.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

function MenuListComposition(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root} style = {{display: "inline"}}>
      
      <span>
        
          
       
        <span
        ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
              <span className="both">
                  <img src={avatar} alt="avatar" className="avatar" />
                  <ExpandMore fontSize="large" />
              </span>
        </span>
        
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} style = {{marginTop : "26px"}}>
                    <div  className = "contall">
                      <img src={avatar} width = "70px" height ="70px" alt = "avatar"/>
                    <div  className = "contuser">
                      <span className="gry">Hello,</span>
                      <h5 className = "name" >{props.user.displayName}</h5>
                      <Link to = "/view and edit profile" className = "editlink">View and edit profile</Link>
                    </div>
                    </div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </span>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.User.user
})

export default connect(mapStateToProps,null)(MenuListComposition)

