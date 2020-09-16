package com.meshk.simplemapir;

import android.content.Context;
import android.view.View;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactPropGroup;

import ir.map.sdk_map.Mapir;

public class SimpleMapIrManager extends SimpleViewManager<SimpleMapIrView> {

    public static final String REACT_CLASS = "SimpleMapIr";
    private ReactApplicationContext reactApplicationContext;

    public SimpleMapIrManager(ReactApplicationContext context)
    {
        reactApplicationContext = context;
    }

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public SimpleMapIrView createViewInstance(ThemedReactContext c) {
        return new SimpleMapIrView(c);
    }

//    @ReactProp(name = "apiKey")
//    public void setApiKey(SimpleMapIrView view, String apiKey) {
//        view.setApiKey(apiKey);
//    }

    @ReactMethod
    public void initApiKey(String apiKey) {
        Mapir.getInstance(reactApplicationContext, apiKey);
    }

//    @ReactProp(name = "markerLocation")
//    public void setMarkerLat(SimpleMapIrView view, ReadableMap location) {
//        double lat = location.getDouble("lat");
//        double lng = location.getDouble("lng");
//        view.setMarker(lat, lng);
//    }
}
