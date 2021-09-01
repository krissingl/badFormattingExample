///////////////////////////////////////////////////Mandated///////////////////////////////////////////////////////////////////////////////////////////
//import necessary components and packages
import React,{useState} from 'react';
import {connect} from 'react-redux';
// import AlertWindow from './popUpAlert.jsx';
import data from '../../dist/data.json';
import classes from '../css/styles.css';

///////////////////////////////////////////////////////////////////Position Markers/////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////NonLocal Info//////////////////////////////////////////////////////////////////////////////
/*Bad Comments: Mumbling, Redundancy, Misleading, Mandated, Journals/Logs, Noise, SCARY Noise, Using a Comment where a Function/Variable Can Work, Position Markers, 
Closing Brace Comments, Attributions and Bylines, Commented-Out Code, HTML Comments, Nonlocal Info, TMI, Unobvious Connections, Function Headers, and Javadocs in NonPublic Code*/

/////////////////////////////////////////////////////////////Journal/Log////////////////////////////////////////////////////////////////////////////////
//Starting work on this again on August 31, 2021. Not sure where we left off.

/////////////////////////////////////////////Mumbling, Redundancy, Function Headers////////////////////////////////////////////////////////////////////
//Fork component for forking
const Fork=({dispatch,changePage,landmark})=>{
   const { landmarkList } = data;
   const currentLandmark = landmark;
   const [showAlert, toggleAlert] =         useState(false);
   const [alertMsg, changeAlertMsg] =       useState('');
   const [alertType, changeAlertType] =     useState('');
   ////////////////////////////////////Misleading, Unobvious connections/////////////////////////////////////////////////////////////////////////////////
   //Only two landmarks
   const landmarkOption1=landmarkList[landmark][0].next;
   const landmarkOption2=landmarkList[landmark][1].next;

///////////////////////////////////////////////Using a Comment where a Function/Variable Can Work////////////////////////////////////////////////////////
//Need a function that creates an alert pop window like in that other component with a fork message to choose from

//////////////////////////////////////////// Commented-Out Code//////////////////////////////////////////////////////////////////////////////////////////
//   let alertPopUp;
//   if (showAlert) {
//     alertPopUp = (
//       <AlertWindow
//         message={alertMsg}
//         toggleAlert={toggleAlert}
//         type={alertType}
//       />
//     );
//   }


///////////////////////////////////////////////////////noise, scary noise/////////////////////////////////////////////////////////////////////////////////
//function to alter the global traveling status
  const changeGlobalTravelingStatus= (status) => {
  //dispatch function for global state manpulation
  dispatch({
  //Type is set to changeTravelingStatus to access that state
  type:'changeTravelingStatus',
  //payload is set to the param 'status' so the codebase can change the value of changeTravelingStatus
  payload:status,
  });
  };

  const changeGlobalCurrentLandmark=(newLandmark)=>{dispatch({type:'changeLandmark',payload:newLandmark});};

  const changeGlobalPrevLandmark=(prevLandmark)=>{
  dispatch({type: 'changePrevLandmark',payload: prevLandmark});
  };

  /////////////////////////////////////////////////////////////////////NonLocal, TMI//////////////////////////////////////////////////////////////////////////////////////////
  //What is This? React! See Below for more info on this library:
  /*The Component Lifecycle
Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.

Mounting
These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

constructor()
static getDerivedStateFromProps()
render()
componentDidMount()
Note:

These methods are considered legacy and you should avoid them in new code:

UNSAFE_componentWillMount()
Updating
An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

static getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
Note:

These methods are considered legacy and you should avoid them in new code:

UNSAFE_componentWillUpdate()
UNSAFE_componentWillReceiveProps()
Unmounting
This method is called when a component is being removed from the DOM:

componentWillUnmount()
Error Handling
These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

static getDerivedStateFromError()
componentDidCatch()
Other APIs
Each component also provides some other APIs:

setState()
forceUpdate()
Class Properties
defaultProps
displayName
Instance Properties
props
state
 */
return (
/* This HTML code is for the fork page that pops up when there is a fork on the route */
<div className={classes.noticePage}>


<div className={classes.forkContent}>
<h3>FORK_DETECTED_IN_ROUTE</h3>
<h3>WHICH_DIRECTION_SHOULD_THE_CREW_TAKE?</h3>
<br />
<div>
{alertPopUp}
</div>
<div className={classes.forkOptions}>
<button type="button" className={classes.forkOptionBtns} onClick={() => { changeGlobalCurrentLandmark(landmarkOption1); changeGlobalPrevLandmark(currentLandmark); changeGlobalTravelingStatus(true); changePage('traveling'); }}>{landmarkOption1}</button>
<div className={classes.forkOR}>OR</div>
<button type="button" className={classes.forkOptionBtns} onClick={() => { changeGlobalCurrentLandmark(landmarkOption2); changeGlobalPrevLandmark(currentLandmark); changeGlobalTravelingStatus(true); changePage('traveling'); }}>{landmarkOption2}</button>
</div>
<div className={classes.checkMapFork}>
<button type="button" className={classes.forkMapBtn} onClick={() => { changeAlertType('map'); changeAlertMsg('ROUTE_MAP'); toggleAlert(true); }}>CHECK_MAP</button>
</div>
</div>
</div>
/////////////////////////////////Closing Brace Comments//////////////////////////////////////////////////////////////////////////////////////////////
);/*End of Return Statement*/
}; /*End */

//////////////////////////////////////////////////TMI////////////////////////////////////////////////////////////////////////////////////////////////////
//Function is needed to map state and dispatch to this component's props so that the landmark state can be accessed across all other components that import in the landmark state
const mapStateToProps=(state)=>({landmark:state.landmark});
const mapDispatchToProps=(dispatch)=>({dispatch});
export default connect(
mapStateToProps,
mapDispatchToProps)

(Fork);
///////////////////////////////////////////////////////Attributions&Bylines/////////////////////////////////////////////////////////////////////////////
//File End
//Updated by Krista SIngleton