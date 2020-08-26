# Find my Pawrents

## Background and Overview

### There are 70 million stray animals living in the US as we speak

Shelters are some of the most unfunded organizations, Find my Pawrents
goal is to connect shelters into the modern world by creating a platform
that connects users directly with shelters from anywhere in the US. Users
will have the ability to fill out a form to schedule a visit with the dogs
and shelters will have ability to review applications from potential
adopters.

# MVP List

1. ### Hosting on Heroku (8/10/20)

---

2. ### Account creation, login/logout, User accounts(8/10/20)

- Users will have the ability to sign up, login and logout.
- Users will be required to login in order to fill out any forms to
  schedule a visit/like/follow any of the dogs.
- Demo account will be available for users to test out some of the sites
  functionality.

---

3. ### Shelter accounts(8/10/20)

- Shelter account will have the ability to add new dogs.
- Shelter account will have the ability to edit existing dog information.
- Shelter accounts will be able to review applications.
- Shelter accounts will be able to accept/deny dog appointments.

---

4. ### Dogs(8/11/20)

- All dogs available for adoption will be displayed on the index page.
- Each dog show page will have a picture/description/name/age/color.
- Each dog will have a schdeule appointment form.
- Each dog will have a show page that also displays the number of times
  this dog has been viewed.
- Dogs will be displayed on the users appointments page in different colors depending on the appointment status.

---

5. ### Appointments(8/12/20)

- Every dog will have a form that can be filled out in order to schedule
  an appointment with that dog.
- Users will have the ability to ask questions/comments about the dogs.

---

6. ### Likes(8/13/20)

- Users will have the ability to 'like' dogs.
- Users will have the ability to 'unlike' dogs.

---

7. ### Production README(8/14/20)

# Code

## Shelter / User Accounts

![](https://media2.giphy.com/media/WTFyqU4s1iBYoLcDw9/giphy.gif)

- In order to allow users the ability to sign up as either a shelter or adopter we implemnted a row in the user model that takes in a string of either SHELTER or USER with validations in the backend to ensure those conditions are met

```javascript
if (!Validator.isIn(data.shelter_status, ["SHELTER", "USER"])) {
  errors.text = "Must be shelter or user";
}
```

- In the frontend we have radio buttons asking the user if they are a shelter or a user that sets the state to whichever options the user selects. As well as adding a trigger that when set to true creates a drop down to allow a shelter to add more information needed as a shelter account.

```javascript
  <div className="are-you-a-shelter">Are you a shelter?</div>
                  <div className="radio-buttons">
                    Yes
                    <input
                      name="status"
                      type="radio"
                      value="SHELTER"
                      onChange={this.update("shelter_status")}
                      onClick={() => this.setState({ trigger: true })}
                    />
                  </div>
                  <div className="radio-buttons">
                    No
                    <input
                      name="status"
                      type="radio"
                      value="USER"
                      onChange={this.update("shelter_status")}
                      onClick={() => this.setState({ trigger: false })}
                    />
                  </div>
```

## New Dog Image / Firebase Storage

![](https://media2.giphy.com/media/QW3nZJ1VkIgiy4itYy/giphy.gif)

- In order to allow our users to upload images of their cute pups we implemented Firebase Storage. This allows us to send the image to the cloud and get a response with the imageURL that we then attach to the new dog as soon as we receive the URL, in order to have a seemless UX where the user doesn't have to click any extra buttons to submit their picture.

```javascript
handleChange = (e) => {
  let image;
  if (e.target.files[0]) {
    image = e.target.files[0];
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on("state_changed", () => {
      storage
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          this.setState({ image: url });
        });
    });
  }
};
```

# Group Members and Work Breakdown

### Team Lead - Daniel Guardado

Responsible for organizing the group and keeping everyone on track.

- Documentation
- Delegation
- GIT workflow
- Helping where needed

---

### Lead Asst - Lauren Lee

Responsible for assisting in any part of the project that requires attention.

- Ability to partner with whichever lead needs the most assistance.

---

### Backend Lead - Gabe Byrne

Responsible for the Node, Express and MongoDB part of the stack.

- Database
- Routes
- Api End-Points

---

### Frontend Lead - Jin Lin

Responsible for React part of the stack.

- React
- Redux
- Design
- CSS

---

### Day 0 (8/9/20)

- Build skeleton - Gabe
- Get backend user auth and Shelter auth - Dan/Gabe
- Draft website design - All
- Work on design docs - Dan

### Day 1 (8/10/20)

- Frontend ready to start working on user auth - Jin
- Frontend ready to start working on shelter auth - Lauren
- Get backend ready for dogs - Gabe
- Help wherever needed -Dan

### Day 2 (8/11/20)

- Frontend ready to start working on dogs show page - Lauren
- Frontend ready to start working on dog index - Jin
- Style show/index - Jin/Lauren/Dan
- Get backend ready for appointments - Gabe/Dan

### Day 3 (8/12/20)

- Frontend integration of appointments to the show page - Lauren
- Frontend integration of current applications to shelter page - Jin/Dan
- Get backend ready for likes - Gabe

### Day 4 (8/13/20)

- Frontend integration of likes on each dog show page - Jin
- Frontend integration of likes for each dog on index - Lauren/Dan
- Review backend functionality of all current features - Gabe

### Day 5 (8/14/20)

- Complete production README - Dan
- Add finishing touches to CSS - Jin/Lauren
- Test and debug - Gabe
- Presentation -All

# Technologies

### Backend

- MongoDB
- Express
- Node
- Firebase Storage

### Frontend

- React/Redux
