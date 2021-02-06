$(document).ready(function () {
	$('.deleteEmp').click(function(){
		   let empid = $(this).data('id');
		   $("#lastid").val(empid);
		//$('#btnDelete').attr('onclick', 'deleteEmp('+empid+')');
    });
});
