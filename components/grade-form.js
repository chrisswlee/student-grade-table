class GradeForm{
  constructor(formElement) {
    this.formElement = formElement;
    this.formElement.addEventListener('submit', this.handleSubmit.bind(this));
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event){
    console.log('hi');
    event.preventDefault();
    var formData = new FormData(event.target);
    var name = formData.get('name');
    var course = formData.get('course');
    var grade = formData.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }
}
