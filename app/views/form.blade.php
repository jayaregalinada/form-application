<div class="container" ng-class="{ blur: submitStatus }">
    <div class="blur-container"></div>
    <div class="container-fluid blur-me intro">
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur soluta, reprehenderit deleniti fugit voluptate dolor reiciendis. Officiis repudiandae, quis doloremque facilis deleniti earum impedit nulla molestiae magni obcaecati. Nam, aliquam!
        </p>
    </div>
    <hr>
    <!-- <form method="post" ng-upload="upload(content)" action="form" ng-class="{ blur: submitStatus }" name="formform" ng-submit="formform.$valid && submitForm('{{ route('form.post') }}')"> -->
    <!-- {{ Form::open(['route' => 'form.post', 'name' => 'formform', 'files' => true, 'ng-upload' => 'upload(content)', 'ng-class' => '{ blur: submitStatus }', 'ng-submit' => 'formform.$valid', 'class' => 'form-horizontal']) }} -->
    {{ Form::open(['route' => 'form.post', 'name' => 'formform', 'ng-upload' => 'upload(content)', 'files' => true, 'ng-class' => '{ blur: submitStatus }', 'ng-submit' => 'formform.$valid && submitForm()', 'class' => 'form-horizontal']) }}
        
        <div class="form-group">
            <label for="name" class="control-label col-sm-4">Full Name</label>
            <div class="col-sm-8">
                <input required name="name" ng-model="form.name" type="text" class="form-control" id="name" placeholder="Enter your full name" />
            </div>
        </div>
        <div class="form-group">
            <label for="position" class="control-label col-sm-4">Position</label>
            <div class="col-sm-8">
                <input required name="position" ng-model="form.position" type="text" class="form-control" id="position" placeholder="Enter your desire position" />
            </div>
        </div>
        <div class="form-group">
            <label for="country" class="control-label col-sm-4">Country</label>
            <div class="col-sm-8">
                <input required name="country" ng-model="form.country" type="country" class="form-control" id="country" placeholder="Enter your country" />
            </div>
        </div>
        <div class="form-group">
            <label for="salary" class="control-label col-sm-4">Salary</label>
            <div class="col-sm-8">
                <input required name="salary"  ng-model="form.captcha" type="text" class="form-control" id="salary" placeholder="Enter your desire salary" />
            </div>
        </div>
        <div class="form-group">
            <label for="attachment1" class="control-label col-sm-4">Attachment A</label>
            <div class="col-sm-8">
                <input name="attachment1" ng-model="form.attachment1" required valid-file type="file" id="attachment1" class="btn btn-primary" />
            </div>
        </div>
        <div class="form-group">
            <label for="attachment2" class="control-label col-sm-4">Attachment B</label>
            <div class="col-sm-8">
                <input name="attachment2" ng-model="form.attachment2" required valid-file type="file" id="attachment2" class="btn btn-primary" />
            </div>
        </div>
        <div class="form-group">
            <label for="attachment3" class="control-label col-sm-4">Attachment C</label>
            <div class="col-sm-8">
                <input name="attachment3" ng-model="form.attachment3" required valid-file type="file" id="attachment3" class="btn btn-primary" />
            </div>
        </div>
        <div class="form-group">
            <label for="attachment4" class="control-label col-sm-4">Attachment D</label>
            <div class="col-sm-8">
                <input name="attachment4" ng-model="form.attachment4" required valid-file type="file" id="attachment4" class="btn btn-primary" />
            </div>
        </div>
        <hr />

        <div class="container-fluid outro blur-me">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            </p>
        </div>

        <hr />

        <div class="form-group" ng-hide="submitStatus">
            <button ng-disabled="!formform.$valid" type="submit" ng-class="{ 'btn-success': formform.$valid, 'btn-danger': !formform.$valid }" class="btn btn-lg center-block">{# submitText #} <i class="glyphicon glyphicon-chevron-right"></i></button>
        </div>

    <!-- </form> -->
    {{ Form::close() }}

</div>