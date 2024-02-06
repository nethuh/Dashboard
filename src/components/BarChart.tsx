"use client";
import React from "react";
import {
    BarChart as BarGraph,
    ResponsiveContainer,
    XAxis,
    YAxis,
    Bar
} from "recharts";

type Props = {};

export default function BarChart({}: Props) {
    return (
        <ResponsiveContainer width={'100%'} height={350}>
            <BarChart></BarChart>
        </ResponsiveContainer>
    )
}
