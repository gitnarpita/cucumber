package CucumberOptions;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/java/features",glue={"stepDefinitions"},strict = true,monochrome=true,

plugin = {"pretty",  "junit:target/reports/report.xml",
					  "json:target/reports/report.json",
					  "html:target/HtmlReport"},

tags="@Smoke"
		)	

public class TestRunner {

}
 