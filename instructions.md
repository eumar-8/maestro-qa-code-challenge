We would like you to build a simple mobile app which allows a user to view surrounding public charging stations, select one to charge at, then tell a backend API that the user would like to start charging on the selected charger.

To keep the time spent on this challenge small, please feel free to do the following:

- Use expo (or create-react-app) to create the environment and utilise expo's APIs where possible.
- Keep the styling of the app as basic as possible, we won't be evaluating this.
- Please use Typescript.

Use the openchargemap.org API to get the list of surrounding public chargers. The openchargemap.org API Docs [are here](https://openchargemap.org/site/develop/api). You can assume all operators are integrated with ev.energy and no operators need to be filtered out. Also, don't worry about car and connector compatibility.

Once the user has selected a charger, they should be able to "Start Charging" on that charger. To do that, an API call is needed to an ev.energy backend. Do not setup a backend to submit the API to, instead do a POST with data in the format below and assume there is no authentication required.

```
POST https://example.ev.energy/chargingsession

{
	"user": 1, # You can hardcode this value
	"car_id": 1, # You can hardcode this value
	"charger_id": 123 # The ChargePointID from openchargemap
}
```

As this is a coding challenge, we don't expect you to do everything that you would normally do for an app like this, we know your time is limited so do what you think are the most important elements and then make notes of what you would do if you had more time.

We look forward to seeing your submission!
