Template.appChat.helpers({
	messages: function (){
		return Messages.find({}, {sort:{createdAt: -1}, limit: 10})
	}

});
Template.appChat.events({

	"click .btnDelete": function (event) {
		Messages.remove(this._id);
		return false;
	},
	"keyup .txtText": function (event){
		if(event.keyCode == 13){
			Messages.insert({
				StudentNo: $(".txtStudentNo").val(),
				Course: $(".txtCourse").val(),
				Name: $(".txtName").val(),
				DateOfBirth: $(".txtDateOfBirth").val(),
				CivilStatus: $(".txtCivilStatus").val(),
				Gender: $(".txtGender").val(),
				BloodType: $(".txtBloodType").val(),
				Height: $(".txtHeight").val(),
				Weight: $(".txtWeight").val(),
				text: $(".txtText").val(),
				createdAt: new Date()
			});

			$(".txtText").val("");
			$(".txtText").focus();
		}
		return false;

	}
});