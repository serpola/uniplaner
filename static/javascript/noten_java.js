var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World!'
	}
});
let tables = new Vue({
	el: '#tables',
	data: {
		blabla: 'Hello World!'
	}
}); 
let buttons = new Vue({
    el: '#buttons',
    data: {
        tablerow: <td><input type="text" name="modul" ></td>
        <td><input type="text" name="note" ></td>
        <td><input type="text" name="ects" ></td>
    },
    methods: {
        add: function() {
            this.$data.tablerow.push(this.$refs['my-input'].value)
        },
    }
})
// nun sollten in allen Inputfelder Hello World drin stehen: v-model
// funktioniert aber noch nicht