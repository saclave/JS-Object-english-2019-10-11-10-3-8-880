<script>
var user = {
    name : 'John',
    surname : 'Mike'
  }
document.write(user.name + " " + user.surname);
document.write("<br>");
user.name= 'Peter';
document.write(user.name + " " + user.surname);
document.write("<br>");
delete user.name;
document.write(user.name + " " + user.surname);
document.write("<br>");
document.write(user.surname);
</script>

<!-- Explanation:
When we added the values John and Mike to their 
corresponding attributes of 'name' and 'surname', 
printing the name and surname will be John Mike. 
When we modified the value for one of the attributes
and in this case the 'name' attribute, it will 
immediately be replaced to the new value. Deleting 
the attribute will result to it being undefined
unless not called in our statement
-->