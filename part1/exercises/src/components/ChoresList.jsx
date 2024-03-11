import React from 'react';
import classes from './ChoresList.module.css';
export default function ChoresList () {
   return (
      <div className={classes.background}>
      <h3 className={classes.choresHeading}>Today's Chores</h3>

      <ol>
         <li className={classes.choresText}>Take out trash</li>
         <li className={classes.choresText}>Do laundry</li>
         <li className={classes.choresText}>Wash dog</li>
        
      </ol>
      </div>
   );
}