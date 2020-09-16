package com.gpslinerndemo;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import ir.map.sdk_map.Mapir;

public class SimpleMapIrManager extends SimpleViewManager<SimpleMapIrView>
{
    public static final String REACT_CLASS = "SimpleMapIr";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    public SimpleMapIrView createViewInstance(ThemedReactContext c) {
        return new SimpleMapIrView(c);
    }

    @ReactProp(name = "markerLocation")
    public void setMarkerLocation(SimpleMapIrView view, ReadableMap markerLocation) {
        if (markerLocation == null)
            return;
        double lat = markerLocation.getDouble("lat");
        double lng = markerLocation.getDouble("lng");
        double zoom = markerLocation.getDouble("zoom");
        view.setMarkerLocation(lat, lng, zoom);
    }
}
