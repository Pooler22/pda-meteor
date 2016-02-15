package sampleCoursesCode;

import static org.junit.Assert.*;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class FacadeTest {

	Facade facade;
	Element element;
	ElementExt elementExt;
	
	@Before
	public void initialize(){
		facade = new Facade();
	}
	
	@After
	public void cleanup()
	{
		facade = null;
		element = null;
		elementExt = null;
	}
	
	@Test
	public void testSetOnly1() {
		facade.SetOnly1(10);
		
		element = Element.getInstance();
		elementExt = ElementExt.getInstance();
		
		assertEquals(10,element.getId());
		assertNotEquals(10, elementExt.getId());
	}
	
	@Test
	public void testSetOnly2() {
		facade.SetOnly2(15);
		
		element = Element.getInstance();
		elementExt = ElementExt.getInstance();
		
		assertEquals(15, elementExt.getId());
		assertNotEquals(15,element.getId());
	}
	
	@Test
	public void testSetBoth() {
		facade.SetBoth(20);
		
		element = Element.getInstance();
		elementExt = ElementExt.getInstance();
		
		assertEquals(20,element.getId());
		assertEquals(20, elementExt.getId());
	}

}
