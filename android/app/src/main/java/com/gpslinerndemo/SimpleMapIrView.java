package com.gpslinerndemo;

import android.content.Context;

import com.mapbox.mapboxsdk.camera.CameraPosition;
import com.mapbox.mapboxsdk.camera.CameraUpdateFactory;
import com.mapbox.mapboxsdk.geometry.LatLng;
import com.mapbox.mapboxsdk.maps.MapboxMap;
import com.mapbox.mapboxsdk.maps.OnMapReadyCallback;
import com.mapbox.mapboxsdk.maps.Style;
import com.mapbox.mapboxsdk.plugins.annotation.Symbol;
import com.mapbox.mapboxsdk.plugins.annotation.SymbolManager;
import com.mapbox.mapboxsdk.plugins.annotation.SymbolOptions;

import androidx.annotation.NonNull;
import androidx.core.content.ContextCompat;
import ir.map.sdk_map.MapirStyle;
import ir.map.sdk_map.maps.MapView;

/**
 * Created by Amin Meshk on 9/16/2020.
 */

public class SimpleMapIrView extends MapView
{
    private MapboxMap mMapBoxMap;
    private Style mMapStyle;
    private Context mContext;
    private Symbol mSymbol;

    public SimpleMapIrView(@NonNull Context context)
    {
        super(context);
        this.mContext = context;
        this.getMapAsync(mapboxMap -> {
            mMapBoxMap = mapboxMap;
            mMapBoxMap.getUiSettings().setRotateGesturesEnabled(false);
            mapboxMap.setStyle(new Style.Builder().fromUri(MapirStyle.MAIN_MOBILE_VECTOR_STYLE), style -> {
                mMapStyle = style;
                LatLng initialPoint = new LatLng(33.171301, 53.294104);
                CameraPosition position = new CameraPosition.Builder()
                        .target(initialPoint)
                        .zoom(4)
                        .tilt(0)
                        .build();
                mMapBoxMap.setCameraPosition(position);


                mMapStyle.addImage("simple_image_id", ContextCompat.getDrawable(mContext, R.drawable.mapbox_marker_icon_default));
            });
        });
    }

    public void setMarkerLocation(double lat, double lng, double zoom) {
        if (lat == 0 && lng == 0)
            return;
        final LatLng point = new LatLng(lat, lng);
        CameraPosition position = new CameraPosition.Builder()
                .target(point)
                .zoom(zoom)
                .tilt(0)
                .build();

        this.getMapAsync(mapboxMap -> {
            this.mMapBoxMap = mapboxMap;
            mapboxMap.getStyle(style -> {
                this.mMapStyle = style;
                mSymbol = new SymbolManager(this, mMapBoxMap, mMapStyle)
                        .create(new SymbolOptions()
                            .withLatLng(point)
                        .withIconImage("simple_image_id")
                        .withIconSize(1.5f));
                mMapBoxMap.animateCamera(CameraUpdateFactory.newCameraPosition(position), 4000);
            });
        });
    }
}
