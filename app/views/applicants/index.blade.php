<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form Application</title>

    <!-- Bootstrap -->
    <link href="assets/css/styles.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>

    <div class="page-header">
        <h1 class="text-center">All Applicants</h1>
    </div>
    
    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Position</th>
            <th>Country</th>
            <th>Salary</th>
            <th>Attachments</th>
          </tr>
        </thead>
        <tbody>
          @foreach ($applicants as $applicant)
            <tr>
              <td>{{ $applicant->id }}</td>
              <td>{{ $applicant->name }}</td>
              <td>{{ $applicant->position }}</td>
              <td>{{ $applicant->country }}</td>
              <td>{{ $applicant->salary }}</td>
              <td>
                <div class="attachments">
                  <a target="_blank" href="/attachments/{{ $applicant->location }}/attachment_1.pdf" class="btn label btn-primary btn-sm">ATTACHMENT 1</a>
                  <a target="_blank" href="/attachments/{{ $applicant->location }}/attachment_2.pdf" class="btn label btn-info btn-sm">ATTACHMENT 2</a>
                  <a target="_blank" href="/attachments/{{ $applicant->location }}/attachment_3.pdf" class="btn label btn-success btn-sm">ATTACHMENT 3</a>
                  <a target="_blank" href="/attachments/{{ $applicant->location }}/attachment_4.pdf" class="btn label btn-warning btn-sm">ATTACHMENT 4</a>
                </div>
              </td>
            </tr>
          @endforeach
        </tbody>
      </table>
    </div>
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="assets/vendor/jquery/jquery.min.js"></script>
    <script src="assets/vendor/angular/angular.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="assets/js/script.js"></script>
  </body>
</html>