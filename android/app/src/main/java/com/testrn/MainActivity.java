package com.testrn;

import android.os.Bundle;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

import javax.annotation.Nullable;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "testrn";
    }
    @Override
    protected ReactActivityDelegate createReactActivityDelegate(){
        return new ReactActivityDelegate(this,getMainComponentName()){
            @Nullable
            @Override
            protected Bundle getLaunchOptions() {
                //测试初始化react native props
//                return super.getLaunchOptions();
                Bundle initialProps = new Bundle();
                initialProps.putString("SOME_VARIABLE_1", "some variable 1 value");
                initialProps.putString("SOME_VARIABLE_2", "some variable 2 value");
                return initialProps;
            }
        };
    }
}
