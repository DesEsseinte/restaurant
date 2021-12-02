const content =document.querySelector('#content');

function displayHome(){
	const head = document.createElement('h1');
	head.innerHTML ='A Batter Place'
	content.appendChild(head);
	
	const div1=document.createElement('div');
	const div2=document.createElement('div');
	const div3=document.createElement('div');
		div1.classList.add('textBox');
		div2.classList.add('textBox');
		div3.classList.add('textBox');
			div1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra consequat justo sit amet lobortis. Praesent gravida leo ac ultricies dignissim. Donec ac purus lacinia, ultricies nibh ullamcorper, euismod mauris. Aliquam tempor enim elit, vitae pretium eros pulvinar dapibus. Proin tempus pellentesque felis ac lobortis. Nunc vulputate est quis sollicitudin cursus. Nam sit amet neque dolor. Sed rhoncus et elit sed suscipit. Donec volutpat sem eget elit finibus hendrerit. Donec eget tincidunt quam, in feugiat dolor."
			div2.innerHTML = "Proin ante erat, bibendum id varius vel, hendrerit vitae dolor. Proin ipsum ante, viverra a volutpat non, semper et lacus. Sed blandit elit non suscipit molestie. ";
			div3.innerHTML = "Donec condimentum, purus sit amet volutpat consequat, est augue volutpat sem, id iaculis odio enim volutpat lorem. Curabitur quis enim velit. Morbi quis nibh rhoncus, suscipit leo ut, blandit urna.";
		content.appendChild(div1);
		content.appendChild(div2);
		content.appendChild(div3);
	}

displayHome();



	


