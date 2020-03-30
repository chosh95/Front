		var numbers = [2, 4, 6, 8, 10];
		showArray(numbers);

		function showArray(arr) {
			var str = "<table><tr>";
			var sum = 0;
			for (var i=0; i<arr.length; i++) {
				str += "<td>" + arr[i] + "</td>";
				sum += arr[i];
			}
			arr.push(sum);
			str += "<td>" + sum + "</td>";
			str += "</tr></table>";
			document.write(str);
		}