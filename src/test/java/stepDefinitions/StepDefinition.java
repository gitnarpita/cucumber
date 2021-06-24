package stepDefinitions;

//import org.junit.runner.RunWith;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
//import io.cucumber.junit.Cucumber;

//@RunWith(Cucumber.class)
public class StepDefinition {

	@Given("user is on netbanking landing page")
	public void user_is_on_netbanking_landing_page() {
		System.out.println("user is on netbanking landing page");
	}

	

	@When("user login into the application with {string} and {string}")
	public void user_login_into_the_application_with_and(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println(string);
	    System.out.println(string2);
	    
	}
	
	@Then("home page is displyed")
	public void home_page_is_displyed() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("home page is displyed");
	}

	
	
		@Then("diaplayed all the card like rewards card travel cared oil cards {string}")
		public void diaplayed_all_the_card_like_rewards_card_travel_cared_oil_cards(String string) {
		    // Write code here that turns the phrase above into concrete actions
			System.out.println("diaplayed all the card :"+string);
		}



}
