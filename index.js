let employee ={
  name:"jane",
  street:"121street",

}
function updateEmployeeWithKeyAndValue(object,key,value){
  employee={...object}  ;
  employee[key]=value;
    return employee;
}
function newUpdateEmployeeWithKeyAndValue(key,value){
  Object.keys(employee)
}
/*function destructivelyUpdateEMployeeWithKeyAndValue(employee,key,value){
    var newObj= employee.assign({},employee,{[key]:value});
    return newObj;
}*/
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee,key) {
    var newObj = Object.assign({},employee);
     delete newObj[key];
    return newObj;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }