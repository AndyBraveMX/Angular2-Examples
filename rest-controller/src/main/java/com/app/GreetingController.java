package com.app;

import java.util.concurrent.atomic.AtomicLong;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GreetingController {

	private static final String template = "Hello, %s!";
	private final AtomicLong counter = new AtomicLong();

	@RequestMapping("/greeting")
	public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
		return new Greeting(counter.incrementAndGet(), String.format(template, name));
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/evaluate")
	public Greeting evaluate(@RequestParam(value = "expression") String expression) {
		ScriptEngineManager manager = new ScriptEngineManager();
		ScriptEngine engine = manager.getEngineByName("js");
		Object result = null;
		try {
			result = engine.eval(expression);
		} catch (ScriptException e) {
			// Do something with the exception
		}
		//return new Greeting(counter.incrementAndGet(), String.format(template, result));
		return new Greeting(counter.incrementAndGet(), String.format(template, result.toString()));
	}
}