package com.patterns.creational.singleton;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class AppConfigTest {

    @Test
    void sameInstanceReturned() {
        // TODO: Call AppConfig.getInstance() twice
        //       and assert both references point to the exact same object
        //       Hint: use assertSame(expected, actual)
        AppConfig ref1 = AppConfig.getInstance();
        AppConfig ref2 = AppConfig.getInstance();
        assertSame(ref1,ref2);
    }

    @Test
    void sharedStateAcrossReferences() {
        // TODO: Get two references via getInstance()
        //       Set appName on ref1, then read it from ref2
        //       They should be equal because it's the same object
        AppConfig ref1 = AppConfig.getInstance();
        AppConfig ref2 = AppConfig.getInstance();
        ref1.setAppName("MyApp");
        assertEquals("MyApp",ref2.getAppName());
    }
}
