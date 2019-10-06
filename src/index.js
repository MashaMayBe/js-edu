/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
    let timeOfEducation = 0;
    if (knowsProgramming == true){
        timeOfEducation = 800;
    }else {
        timeOfEducation = 500 + 800;
    }
    let focusTime = 0;
    for (let key in config){
        if( key == focus){
            focusTime = config[key];
        }
    }
      return Math.ceil(timeOfEducation/focusTime);
  };
  