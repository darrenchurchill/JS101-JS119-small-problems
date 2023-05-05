/**
 * Darren Churchill
 *
 * Launch School Exercises
 * JS101-JS119 - Small Problems
 * Medium 1
 *
 * Stack Machine Interpretation
 *
 * https://launchschool.com/exercises/026e99f0
 *
 */

const OPERATIONS = {
  push: function(register, stack) {
    stack.push(register);
    return [register, stack];
  },

  add: function(register, stack) {
    register += stack.pop();
    return [register, stack];
  },

  sub: function(register, stack) {
    register -= stack.pop();
    return [register, stack];
  },

  mult: function(register, stack) {
    register *= stack.pop();
    return [register, stack];
  },

  div: function(register, stack) {
    register = Math.trunc(register / stack.pop());
    return [register, stack];
  },

  remainder: function(register, stack) {
    register %= stack.pop();
    return [register, stack];
  },

  pop: function(register, stack) {
    register = stack.pop();
    return [register, stack];
  },

  reg: function(register, stack, number) {
    register = number;
    return [register, stack];
  },
};

/**
 * Given a string of commands for a stack machine, perform the commands and
 * return the result of any PRINT commands.
 * @param {String} commands the commands to perform
 * @returns {String} the result of any PRINT commands
 */
function minilang(commands) {
  let stack = [];
  let register = 0;
  let result = "";

  commands.split(" ").forEach((command) => {
    command = command.toLowerCase();

    if (command === "print") {
      if (result.length !== 0) result += "\n";
      result += `${register}`;
    } else if (Object.keys(OPERATIONS).includes(command)) {
      [register, stack] = OPERATIONS[command](register, stack);
    } else {
      [register, stack] = OPERATIONS.reg(register, stack, Number(command));
    }
  });

  return result;
}

module.exports = {
  minilang,
};
