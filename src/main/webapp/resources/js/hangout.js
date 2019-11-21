/***********************************
** 제이쿼리 폼 체크 메소드
************************************/
$(document).ready(function(){
	
		/** 로그인 폼 체크 **/
		$("#btnLogin").click(function(){
			if($("#id").val() == ""){
				alert("아이디를 입력해주세요");
				$("#id").focus();
			}else if($("#pass").val() == ""){
				alert("패스워드를 입력해주세요");
				$("#pass").focus();
			}else{
				loginForm.submit();
			}
		});
		
		/** 회원가입 폼 유효성 체크 **/
		$("#btnJoin").click(function(){
			if($("#id").val() ==""){
				alert("아이디를 입력해주세요");
				$("#id").focus();
			}else if($("#name").val() == ""){
				alert("이름을 입력해주세요");
				$("#name").focus();
			}else if($(".gender:checked").length == 0){
				alert("성별을 선택해주세요");	
			   //성별 남자에 focus
			}else if($("#pass").val() == ""){
				alert("암호를 입력해주세요");
				$("#pass").focus();
			}else if($("#cpass").val() == ""){
				alert("암호 확인을 입력해주세요");
				$("#cpass").focus();
			}else if($("#email1").val() == ""){
				alert("이메일을 입력해주세요");
				$("#email1").focus();
			}else if($("#email2").val() == ""){
				alert("이메일 주소를 선택해주세요");
				$("#email3").focus();
			}else if($("#addr").val() == ""){
				alert("주소를 입력해주세요");
				$("#addr").focus();
			}else if($(".phone_comp:checked").length == 0){
				alert("통신사를 선택해주세요");
				//첫번째 통신사 focus
			}else if($("#phone_number2").val() == ""){
				alert("폰번호를 입력해주세요");
				$("#phone_number2").focus();
			}else if($("#phone_number3").val() == ""){
				alert("폰번호를 입력해주세요");
				$("#phone_number3").focus();
			}else if($(".hobby:checked").length == 0){
				alert("취미를 선택해주세요");
				//첫번째 취미 focus
			}else{
				joinForm.submit();
			}
		}); //form check
		
		
		/*** 암호&암호확인 체크 **/
		$("#cpass").focusout(function(){
			//passCheckResult
			if($("#pass").val() == ""){
				alert("암호를 입력해주세요");
				$("#pass").focus();
			}else{
				if($("#cpass").val() != ""){				
					if($("#pass").val() == $("#cpass").val()){
						$("#passCheckResult").css("display","block")
						.css("color","blue").css("margin-left","120px")
						.css("font-size","9pt").text("암호가 동일합니다");
					}else{
						$("#passCheckResult").css("display","block")
						.css("color","red").css("margin-left","120px")
						.css("font-size","9pt").text("암호가 다릅니다. 다시 입력해주세요");
						$("#pass").val(""); 
						$("#cpass").val("");
						$("#pass").focus();
					}
				}
			}
		});// pass&cpass check
		
		/** 이메일 주소 선택 **/
		$("#email3").change(function(){
			if($("#email3").val() != "선택"){
				$("#email2").val($("#email3").val());
			}else{
				alert("이메일 주소를 선택해주세요");
				$("#email2").val("");
				$("#email3").focus();				
			}
		});
		
		
		/** 게시판 글쓰기 폼 유효성 체크 **/
		$("#btnBoardWrite").click(function(){
			if($("#btitle").val() == ""){
				alert("제목을 입력해주세요");
				$("#btitle").focus();
			}else{
				boardForm.submit();
			}
		});
				

		/** 공지사항관리 글쓰기 폼 유효성 체크 **/
		$("#btnNoticeWrite").click(function(){
			if($("#ntitle").val() == ""){
				alert("제목을 입력해주세요");
				$("#ntitle").focus();
			}else{
				noticeForm.submit();
			}
		});
		
			
		
});//end of document



/***********************************
** 자바스크립트 폼 체크 함수
************************************/
/**
*  로그인 폼 체크
*/
function loginFormCheck(){
	var id = document.getElementById("id");
	var pass = document.getElementById("pass");
	
	if(id.value == ""){
		alert("아이디를 입력해주세요");
		id.focus();
	}else if(pass.value == ""){
		alert("패스워드를 입력해주세요");
		pass.focus();
	}else{
		loginForm.submit();
	}
}

/** 회원가입 폼체크 **/
function objCheck(objList){
	var checkResult = "";
	
	for(i=0;i<objList.length;i++){
		if(objList[i].checked){
			checkResult = "on";
		}
	}
	return checkResult;
}

/** 회원가입 폼 유효성 체크 **/
function joinFormCheck(){		
	var genderList = document.getElementsByName("gender");
	var phoneCompList = document.getElementsByName("phone_comp");
	var hobbyList = document.getElementsByName("hobby");
	var genderCheck = objCheck(genderList);
	var phoneCompCheck = objCheck(phoneCompList);
	var hobbyCheck = objCheck(hobbyList);	
	
	var id = document.getElementById("id");
	var name = document.getElementById("name");
	var pass = document.getElementById("pass");
	var cpass = document.getElementById("cpass");
	var email1 = document.getElementById("email1");
	var email2 = document.getElementById("email2");
	var addr = document.getElementById("addr");
	var phone_number2 = document.getElementById("phone_number2");
	var phone_number3 = document.getElementById("phone_number3");
	
	if(id.value ==""){
		alert("아이디를 입력해주세요");
		id.focus();
	}else if(name.value == ""){
		alert("이름을 입력해주세요");
		name.focus();
	}else if(genderCheck == ""){
		alert("성별을 선택해주세요");	
	    genderList[0].focus();
	}else if(pass.value == ""){
		alert("암호를 입력해주세요");
		pass.focus();
	}else if(cpass.value == ""){
		alert("암호 확인을 입력해주세요");
		cpass.focus();
	}else if(email1.value == "" || email2.value == ""){
		alert("이메일을 입력해주세요");
		email1.focus();
	}else if(addr.value == ""){
		alert("주소를 입력해주세요");
		addr.focus();
	}else if(phoneCompCheck == ""){
		alert("통신사를 선택해주세요");
		phoneCompList[0].focus();
	}else if(phone_number2.value == ""){
		alert("폰번호를 입력해주세요");
		phone_number2.focus();
	}else if(phone_number3.value == ""){
		alert("폰번호를 입력해주세요");
		phone_number3.focus();
	}else if(hobbyCheck == ""){
		alert("취미를 선택해주세요");
		hobbyList[0].focus();
	}else{
		joinForm.submit();
	}		
}


/** 패스워드&패스워드 확인 체크 **/
function passCheck(){
	//암호, 암호확인 데이터 존재!!
	var pass = document.getElementById("pass");
	var cpass = document.getElementById("cpass");
	var msg = document.getElementById("passCheckResult");
	
	if(pass.value == ""){
		alert("암호를 입력해주세요");
		pass.focus();
		return false;
	}else{
		if(cpass.value != ""){				
			if(pass.value == cpass.value){
				msg.style.display = "block";
				msg.style.color="blue";
				msg.style.marginLeft="120px";
				msg.style.fontSize="9pt";
				msg.innerHTML = "암호가 동일합니다";
			}else{
				msg.style.display = "block";
				msg.style.color="red";
				msg.style.marginLeft="120px";
				msg.style.fontSize="9pt";
				msg.innerHTML = "암호가 다릅니다. 다시 입력해주세요";
				pass.value="";  cpass.value = "";
				pass.focus();
			}
		}
	}
}

function emailCheck(){
	var email2 = document.getElementById("email2");
	var email3 = document.getElementById("email3");
	
	if(email3.value != "선택"){
		email2.value = email3.value;
	}else{
		email2.value = "";
	}
}

/** 게시판 글쓰기 폼 유효성 체크 **/
function boardFormCheck(){
	var btitle = document.getElementById("btitle");
	
	if(btitle.value == ""){
		alert("제목을 입력해주세요");
		btitle.focus();
	}else{
		boardForm.submit();
	}
}

/** 공지사항관리 글쓰기 폼 유효성 체크 **/
function noticeFormCheck(){
	var ntitle = document.getElementById("ntitle");
	
	if(ntitle.value == ""){
		alert("제목을 입력해주세요");
		ntitle.focus();
	}else{
		noticeForm.submit();
	}
	
}


























