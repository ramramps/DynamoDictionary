var inDepthObj = {
    "nodes": [
        {
            "Name": "Code Block",
            "description": "Allows for DesignScript code to be authored directly",
            "categories":["Core","Input"],
            "folderPath": "01_codeBlock",
            "dynFile": ["00_codeBlock"],
            "imageFile": ["01_codeBlock"],
            "inputs": "",
            "inDepth": "The Code Block is universal and can be useful in all definitions. With this node, we can fully customize the Dynamo functionality and experience by coding directly into the graph. In this example, we see a range of possible uses including Numbers, Strings, Booleans for item based code, and Ranges and Sequences for creating lists of values."
        }, {
            "Name": "Number Slider",
            "description": "A slider that produces numeric values.",
            "categories":["Core","Input"],
            "folderPath": "02_numberSlider",
            "dynFile": ["01_numberSlider"],
            "imageFile": ["01_numberSlider"],
            "inputs": "",
            "inDepth": "The Number Slider is a customizable, tactile node that allows us to interface with the data driving our Dynamo definitions. Here, the number slider is paired with a code block to create a dynamic list sequence with a variable step size."
        }, {
            "Name": "Integer Slider",
            "description": "A slider that produces integer values.",
            "categories":["Core","Input"],
            "folderPath": "02_numberSlider",
            "dynFile": ["02_integerSlider"],
            "imageFile": ["02_integerSlider"],
            "inputs": "",
            "inDepth": "An Integer Slider works in the same way as a Number Slider but only outputs integers. The Integer Slider in the example definition allows us to control the list length, ensuring that we always have whole-number of list outputs. "
        }, {
            "Name": "ByCoordinates (x, y)",
            "description": "Form a Point in the XY plane given two 2 cartesian coordinates. The Z component is 0.",
            "categories":["Geometry","Point"],
            "folderPath": "03_point",
            "dynFile": ["01_ByCoordinates", "02_ByCoordinates"],
            "imageFile": ["01_pointByCoordinates", "02_ByCoordinates"],
            "inputs": [{
                "Name": "x",
                "Type": "double"
            }, {
                "Name": "y",
                "Type": "double"
            }],
            "inDepth": "The Point By Coordinates (XY) calls for two number inputs and generates a point on the Dynamo base plane.  In the first example,  we are using two sliders to dynamically control the point’s X and Y location on the Z-plane. In the second, we are using two Number Sliders and a Code Block Range to determine the maximum extents of the grid and the spacing between points. By changing the Points By Coordinates lacing to Cross-Reference, we can create multi-dimensional set of points along the X and Y axis."
        }, {
            "Name": "ByCylindricalCoordinates",
            "description": "Form a Point in the given coordinate system given its position in cylindrical coordinates.",
            "categories":["Geometry","Point"],
            "folderPath": "03_point",
            "dynFile": ["03_ByCylindricalCoordinates"],
            "imageFile": ["03_ByCylindricalCoordinates"],
            "inputs": [{
                "Name": "cs",
                "Type": "CoordinateSystem"
            }, {
                "Name": "angle",
                "Type": "double"
            }, {
                "Name": "elevation",
                "Type": "double"
            }, {
                "Name": "radius",
                "Type": "double"
            }],
            "inDepth": "The Point By Cylindrical Coordinates node creates a point located within a cylindrical space. Here, we set the lacing to Cross-Reference and use a range of angles and elevations to generate a grid of points along a cylinder with a dynamic radius."
        }, {
            "Name": "BySphericalCoordinates",
            "description": "Form a Point in the given coordinate system given its position in spherical coordinates.",
            "categories":["Geometry","Point"],
            "folderPath": "03_point",
            "dynFile": ["04_BySphericalCoordinates"],
            "imageFile": ["04_BySphericalCoordinates"],
            "inputs": [{
                "Name": "cs",
                "Type": "CoordinateSystem"
            }, {
                "Name": "phi",
                "Type": "double"
            }, {
                "Name": "theta",
                "Type": "double"
            }, {
                "Name": "radius",
                "Type": "double"
            }],
            "inDepth": "The Point By Spherical Coordinates node creates a point located within a spherical space. Here, we set the lacing to Cross-Reference and use a range of phi and theta angles to generate a grid of points along a cylinder with a dynamic radius. The location of the sphere is set to a Coordinate System with the origin (1, 5, 1)."
        }, {
            "Name": "ByCartesianCoordinates",
            "description": "Form a Point in the given coordinate system with 3 cartesian coordinates",
            "categories":["Geometry","Point"],
            "folderPath": "03_point",
            "dynFile": ["05_ByCartesianCoordinates"],
            "imageFile": ["05_ByCartesianCoordinates"],
            "inputs": [{
                "Name": "cs",
                "Type": "CoordinateSystem"
            }, {
                "Name": "x",
                "Type": "double"
            }, {
                "Name": "y",
                "Type": "double"
            }, {
                "Name": "z",
                "Type": "double"
            }],
            "inDepth": "Point By Cartesian Coordinates gives us the ability to set the X, Y and Z values of a point’s location. In this example, we are setting multiple Code Block Ranges controlled by sliders to drive the three-dimensional array of points."
        },
        {
            "Name": "ByCenterPointRadiusNormal",
            "description": "Creates a Circle with specified center Point, radius, and normal direction.",
            "categories":["Geometry","Circle"],
            "folderPath": "04_circle",
            "dynFile": ["ByCenterPointRadiusNormal"],
            "imageFile": ["09_ByCenterPointRadiusNormal"],
            "inputs": [{
                "Name": "centerPoint",
                "Type": "Point"
            }, {
                "Name": "radius",
                "Type": "double"
            }, {
                "Name": "normal",
                "Type": "Vector"
            }],
            "inDepth": "Circle By Center Point Radius Normal creates a circle at a point with a controllable radius and normal. In this example, we create a vector from the Origin Point to the Point By Coordinates to control the direction of the circle."
        }, {
            "Name": "ByPlaneRadius",
            "description": "Create a Circle centered at the input Plane origin (root), lying in the input Plane, with given radius.",
            "categories":["Geometry","Circle"],
            "folderPath": "04_circle",
            "dynFile": ["ByPlaneRadius"],
            "imageFile": ["10_ByPlaneRadius"],
            "inputs": [{
                "Name": "plane",
                "Type": "Plane"
            }, {
                "Name": "radius",
                "Type": "double"
            }],
            "inDepth": "Circle By Plane Radius is a condensed node to create any type of circle. In this example, we use the YZ plane to determine the circle direction, and a Number slider to dynamically control the circle’s radius."
        }, {
            "Name": "ByCenterPointRadius",
            "description": "Creates a Circle with input center Point and radius in the world XY plane, with world Z as normal.",
            "categories":["Geometry","Circle"],
            "folderPath": "04_circle",
            "dynFile": ["ByCenterPointRadius"],
            "imageFile": ["11_ByCenterPointRadius"],
            "inputs": [{
                "Name": "centerPoint",
                "Type": "Point"
            }, {
                "Name": "radius",
                "Type": "double"
            }],
            "inDepth": "Circle By Center Point Radius is a simplified node to create a circle with a the Z-Plane normal. This definition uses a code block to create a point in three-dimensional space, and locates the circle around the point. The radius is controlled dynamically with a Number Slider."
        }, {
            "Name": "ByThreePoints",
            "description": "Create a Circle passing through three input Points.",
            "categories":["Geometry","Circle"],
            "folderPath": "04_circle",
            "dynFile": ["ByThreePoints"],
            "imageFile": ["12_ByThreePoints"],
            "inputs": [{
                "Name": "p1",
                "Type": "Point"
            }, {
                "Name": "p2",
                "Type": "Point"
            }, {
                "Name": "p3",
                "Type": "Point"
            }],
            "inDepth": "Circle By Three Points receives point inputs and creates a circle. This example shows how thee randomly generated points on the Z-plane will always result in a circle."
        }, {
            "Name": "ByBestFitThroughPoints",
            "description": "Best fit Circle through Points",
            "categories":["Geometry","Circle"],
            "folderPath": "04_circle",
            "dynFile": ["ByBestFitThroughPoints"],
            "imageFile": ["13_ByBestFitThroughPoints"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }],
            "inDepth": "Circle By Best Fit Through Points receives point inputs and creates a best fit circle through them. In this example, we can dynamically increase the number of randomly generated points with a Number Slider, altering the shape of the best-fit circle. "
        }, {
            "Name": "ByPoints",
            "description": "Construct a Polygon Curve by connecting Points.",
            "categories":["Geometry","Polygon"],
            "folderPath": "05_polygon",
            "dynFile": ["ByPoints"],
            "imageFile": ["14_ByPoints"],
            "input": [{
                "Name": "points",
                "Type": "Point[]"
            }],
            "inDepth": "Polygon By Points creates a polygon from a list of input points. The points will be connected in the order of the list they originate from. In this example, we create a list of random points driven by a Number slider. The points are then connected with lines in the Polygon By Points Component."
        }, {
            "Name": "RegularPolygon",
            "description": "Construct a Polygon Curve by connecting Points.",
            "categories":["Geometry","Polygon"],
            "folderPath": "05_polygon",
            "dynFile": ["RegularPolygon"],
            "imageFile": ["15_RegularPolygon"],
            "inputs": [{
                "Name": "circle",
                "Type": "Circle"
            }, {
                "Name": "numberSides",
                "Type": "int"
            }],
            "inDepth": "Polygon Regular Polygon is a simple component that will inscribe a regular polygon of any number of sides into a circle. In this example, we create the reference circle from a random Best Fit Through Points and draw a six-sided polygon inside the circle."
        }, {
            "Name": "ByWidthLength (width, length)",
            "description": "Create a Rectangle centered at the WCS origin in the WCS XY Plane, with specified width (X Axis length), and length (Y Axis length).",
            "categories":["Geometry","Rectangle"],
            "folderPath": "06_rectangle",
            "dynFile": ["01_ByWidthLength"],
            "imageFile": ["16_ByWidthLength"],
            "inputs": [{
                "Name": "width",
                "Type": "double"
            }, {
                "Name": "length",
                "Type": "double"
            }],
            "inDepth": "The Rectangle By Width Length node creates a rectangle on the Z-base plane with a specified length and width dimension. The center of the rectangle will be located at the grid origin. In this example, we use two Number Sliders to drive the shape of the rectangle. "
        }, {
            "Name": "ByCornerPoints (p1, p2, p3, p4)",
            "description": "Create a Rectangle by four corner Points.",
            "categories":["Geometry","Rectangle"],
            "folderPath": "06_rectangle",
            "dynFile": ["02_ByCornerPoints"],
            "imageFile": ["17_ByCornerPoints"],
            "inputs": [{
                "Name": "p1",
                "Type": "Point"
            }, {
                "Name": "p2",
                "Type": "Point"
            }, {
                "Name": "p3",
                "Type": "Point"
            }, {
                "Name": "p4",
                "Type": "Point"
            }],
            "inDepth": "The Rectangle By Corner Points node takes four input points and creates a rectangle from them. The input points must reflect a rectangle form. In this example, two Number Sliders are used to create the Points By Coordinates at the rectangle’s vertices. "
        }, {
            "Name": "ByWidthLength (cs, width, length)",
            "description": "Create a Rectangle by four corner Points.",
            "categories":["Geometry","Rectangle"],
            "folderPath": "06_rectangle",
            "dynFile": ["03_ByWidthLength"],
            "imageFile": ["18_ByWidthLength"],
            "inputs": [{
                "Name": "cs",
                "Type": "CoordinateSystem"
            }, {
                "Name": "width",
                "Type": "double"
            }, {
                "Name": "length",
                "Type": "double"
            }],
            "inDepth": "Create a Rectangle centered at the input origin in the CoordinateSystem XY Plane, with specified width (X Axis length), and length (Y Axis length)."
        }, {
            "Name": "ByThickeningCurve",
            "description": "Make PolyCurve by thickening a curve.",
            "categories":["Geometry","PolyCurve"],
            "folderPath": "07_polycurve",
            "dynFile": ["ByThickeningCurve"],
            "imageFile": ["19_ByThickeningCurve"],
            "inputs": [{
                "Name": "curve",
                "Type": "Curve"
            }, {
                "Name": "thickness",
                "Type": "double"
            }, {
                "Name": "nor",
                "Type": "Vector"
            }],
            "inDepth": "Polycurve By Thickening Curve is a node that constructs a closed, offset polygon from a single curve. In this node, we can specify the curve being thickened, the overall thickness, and the normal direction of the offset. This example shows how a randomly generated Nurbs Curve is offset perpendicular to its start and end point vector. "
        }, {
            "Name": "ByPoints",
            "description": "Make PolyCurve from sequence of lines connecting points. For closed curve last point should be in same location as start point.",
            "categories":["Geometry","PolyCurve"],
            "folderPath": "07_polycurve",
            "dynFile": ["ByPoints"],
            "imageFile": ["20_ByPoints"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "connectLastToFirst",
                "Type": "bool"
            }],
            "inDepth": "Polycurve By Points creates joined curves from a set of vertices. This node also allows us to toggle between a closed and an open shape. In this example, points are created along a circle and are redrawn with a PolyCurve By Points component, creating a closed polygon shape."
        }, {
            "Name": "ByJoinedCurves",
            "description": "Make PolyCurve by joining curves. Flips curve as needed for connectivity",
            "categories":["Geometry","PolyCurve"],
            "folderPath": "07_polycurve",
            "dynFile": ["ByJoinedCurves"],
            "imageFile": ["21_ByJoinedCurves"],
            "inputs": [{
                "Name": "curves",
                "Type": "Curve[]"
            }],
            "inDepth": "Polycurve By Joined Curves creates joined curves from a set of curves with matching vertices. In this example, a RegularPolygon is exploded into a curve list and is then rejoined into a Polycurve."
        }, {
            "Name": "ByControlPoints (points)",
            "description": "Create a BSplineCurve by using explicit control points. NOTE 1: BSplineCurves with deg=1 have G1 discontinuities, which cause problems for extrusion, sweep, and other operations. They should be avoided. Use a PolyCurve instead. NOTE 2: If the curve is periodic (closed), then the first and last points MUST be the same.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByControlPoints1"],
            "imageFile": ["22_ByControlPoints1"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }],
            "inDepth": "Nurbs Curve By Control Points inputs a list of points to use as control points and outputs a Nurbs Curve. This example uses a Code Block to generate two lists corresponding to X and Y locations of a series of points. The points are used to draw the Nurbs Curve."
        }, {
            "Name": "ByPointsTangents",
            "description": "Returns a BSplineCurve through the points, with tangent directions.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByPointsTangents"],
            "imageFile": ["23_ByPointsTangents"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "startTangent",
                "Type": "Vector"
            }, {
                "Name": "endTangent",
                "Type": "Vector"
            }],
            "inDepth": "Nurbs Curve By Points Tangents inputs a list of control points and the start and end tangent that the Nurbs Curve will maintain. This example uses a reference circle for the control points of the curve, and a single vector to control both the start and end tangents. "
        }, {
            "Name": "ByPoints (points, degree)",
            "description": "Create a BSplineCurve by interpolating between points.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByPoints1"],
            "imageFile": ["24_ByPoints1"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "degree",
                "Type": "int"
            }],
            "inDepth": "Nurbs Curve By Points inputs a list of points to draw a Nurbs Curve through, and also allows us to change the degree of the curve. This example generates six random points on the World XY plane and connects them in order in the X and Y directions. "
        }, {
            "Name": "ByPoints (points, closeCurve)",
            "description": "Create a BSplineCurve by interpolating between points.",
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByPoints2"],
            "imageFile": ["25_ByPoints2"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "closeCurve",
                "Type": "bool"
            }],
            "inDepth": "Nurbs Curve By Points inputs a list of points to draw a Nurbs Curve through and also allows us to close the curve. This example generates four random points on the World XY plane and connects them in order in the X and Y directions, closing the curve back to the first point in the list."
        }, {
            "Name": "ByPoints (points)",
            "description": "Create a BSplineCurve by interpolating between points.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByPoints3"],
            "imageFile": ["27_ByPoints3"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }],
            "inDepth": "Nurbs Curve By Points inputs a list of points to draw a Nurbs Curve through. This example generates six random points on the World XY plane and connects them in order in the X and Y directions. "
        }, {
            "Name": "ByControlPoints (points, degree)",
            "description": "Create a BSplineCurve by using explicit control points. NOTE 1: BSplineCurves with deg=1 have G1 discontinuities, which cause problems for extrusion, sweep, and other operations. They should be avoided. Use a PolyCurve instead. NOTE 2: If the curve is periodic (closed), then the first and last points MUST be the same.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByControlPoints2"],
            "imageFile": ["26_ByControlPoints2"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "degree",
                "Type": "int"
            }],
            "inDepth": "Nurbs Curve By Control Points inputs a list of control points to draw the Nurbs Curve and also allows us to control the degree of the curve. This example generates four random points on the World XY plane and connects them in order in the X and Y directions."
        }, {
            "Name": "ByControlPoints (points, degree, closeCurve)",
            "description": "Create a BSplineCurve by using explicit control points. NOTE 1: BSplineCurves with deg=1 have G1 discontinuities, which cause problems for extrusion, sweep, and other operations. They should be avoided. Use a PolyCurve instead. NOTE 2: If the curve is periodic (closed), then the first and last points MUST be the same.",
            "categories":["Geometry","NurbsCurve"],
            "folderPath": "08_nurbsCurve",
            "dynFile": ["ByControlPoints3"],
            "imageFile": ["28_ByControlPoints3"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[]"
            }, {
                "Name": "degree",
                "Type": "int"
            }, {
                "Name": "closeCurve",
                "Type": "bool"
            }],
            "inDepth": "Nurbs Curve By Control Points inputs a list of control points to draw the Nurbs Curve and also allows us to control the degree of the curve. We also have the option to close the curve back to the first point in the list. This example generates four random points on the World XY plane and connects them in order in the X and Y directions."
        }, {
            "Name": "ByControlPoints",
            "description": " Create a NurbsSurface by using explicit control Points, with specified U and V degrees.",
            "categories":["Geometry","NurbsSurface"],
            "folderPath": "09_nurbsSurface",
            "dynFile": ["ByControlPoints"],
            "imageFile": ["29_ByControlPoints"],
            "inputs": [{
                "Name": "controlVertices",
                "Type": "Point[][]"
            }, {
                "Name": "uDegree",
                "Type": "int"
            }, {
                "Name": "vDegree",
                "Type": "int"
            }],
            "inDepth": "Nurbs Surface By Control Points takes in a two dimensional array of control vertices and outputs a Nurbs Surface. This node also gives us the ability to calibrate the degree in the U and V directions. In this example, a 10 by 10 grid of points is created with a Code Block Range. The grid is then scaled in the Z-direction at random, modulating the output surface from the By Control Points node. "
        }, {
            "Name": "ByPoints",
            "description": "Creates a NurbsSurface with specified interpolated points and U and V degrees. The resultant surface will pass through all of the points.",
            "categories":["Geometry","NurbsSurface"],
            "folderPath": "09_nurbsSurface",
            "dynFile": ["ByPoints"],
            "imageFile": ["30_ByPoints"],
            "inputs": [{
                "Name": "points",
                "Type": "Point[][]"
            }, {
                "Name": "uDegree",
                "Type": "int"
            }, {
                "Name": "vDegree",
                "Type": "int"
            }],
            "inDepth": "Nurbs Surface By Points takes in a two dimensional array of control vertices and outputs a Nurbs Surface. This node also gives us the ability to calibrate the degree in the U and V directions. In this example, a 50 by 50 grid of points is created with a Code Block Range. The grid is then scaled in the Z-direction at random, modulating the output surface from the By Control Points node. "
        },

         ]
}
