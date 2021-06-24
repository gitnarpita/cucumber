$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/login.feature");
formatter.feature({
  "name": "Application login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Homepage displayed on default login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "user is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into the application with \"Jin\" and \"1234\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_login_into_the_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is displyed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_displyed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "diaplayed all the card like rewards card travel cared oil cards \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.diaplayed_all_the_card_like_rewards_card_travel_cared_oil_cards(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Homepage displayed on default login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on netbanking landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user login into the application with \"Jhon\" and \"122\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.user_login_into_the_application_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page is displyed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.home_page_is_displyed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "diaplayed all the card like rewards card travel cared oil cards \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.StepDefinition.diaplayed_all_the_card_like_rewards_card_travel_cared_oil_cards(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});