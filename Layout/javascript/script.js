$(document).ready(function(){
	$("#txtCep").focusout(function(){
		var cep = $("#txtCep").val();
		cep = cep.replace("-", "");

		var urlString = "https://viacep.com.br/ws/"+ cep +"/json/";

		$.ajax({
			url: urlString,
			type: "get",
			dataType: "json",
			success: function(data){
				console.log(data);

				$("#txtCidade").val(data.localidade);
				$("#txtEstado").val(data.uf);
				$("#txtBairro").val(data.bairro);
				$("#txtRua").val(data.logradouro);		
			},
			error: function(erro){
				console.log(erro);
			}
		});
	});
});

//VALIDANDO O TIPO DE EXTENSÃO DO ARQUIVO DE UPLOAD
// $('#submit').click(function(event) {
//     var val = $('input[type=file]').val().toLowerCase();
//     var regex = new RegExp("(.*?)\.(pdf|docx|doc)$");
//     if(!(regex.test(val))) {
//         $('.uploadExtensionError').show();
//         event.preventDefault();
//     }
// });
