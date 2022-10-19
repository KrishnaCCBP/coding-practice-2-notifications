const Notification = props => {
  <div>
      <img src={props.src}/>
      <span>
          <p>{props.text}</p>
      </span>
  </div>
}

const element = (
  <h1>Notifications</h1>
  <Notification src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" text="Information Message"/>
  <Notification src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" text="Success Message"/>
  <Notification src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" text="Warning Message"/>
  <Notification src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" text="Error Message"/>
)

ReactDOM.render(element, document.getElementById('root'))
