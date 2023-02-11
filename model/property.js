const { model, Schema } = require('mongoose');



const propertySchema = new Schema(
    {
        propertyName: {
            type: String,
        },
       
        mapLocation: {
            type: String,
        },
        location: {
            type: String,
        },
        projectDeveloper: {
            type: String,
        },
        ownerShip: {
            type: String,
        },
        about: {
            type: String,
        },
        carpetArea: {
            type: Number,
        },
        rentPsf: {
            type: Number,
        },
        fitOuts: {
            type: Boolean,
        },
        powerBackup: {
            type: Boolean,
        },
        toilet: {
            type: Boolean,
        },
        tenure: {
            type: Number,
        },
        ocStatus: {
            type: Boolean,
        },
        imagesAndVideos: {
            interior: [],
            exterior: [],
            frontSide: [],
        },
        deposit: {
            type: Number,
        },
        brokerage: {
            type: Number,
        },
        additionalDetails: {
            type: Object,
        },
        transactionType: {
            type: String,
        },
        buildingStructure: {
            type: String,
        },
        rentFreePeriod: {
            type: Number,
        },
        lockInPeriod: {
            type: Number,
        },
        possession: {
            type: Number,
        },
        ceilingHeight: {
            type: Number,
        },
        accessRoadWidth: {
            type: Number,
        },
        frontAge: {
            type: Number,
        },
        parking: {
            type: Number,
        },
        documents: {
            floorPlans: [],
            fireNDC: [],
            autocad: [],
            licenses: [],
            otherDocuments: [],
        },
        transactionClosure: { type: String },
        otherAmenities: [],

        mezzainineAvailable: {
            type: Boolean,
        },
      
        propertyTypeId: {
            type: Schema.Types.ObjectId,
            ref: PROPERTYTYPE,
        },
        developerId: {
            type: Schema.Types.ObjectId,
            ref: BRAND,
        },
        step: {
            type: Number,
            enum: [1, 2, 3, 4, 5, 6],
        },
        status: {
            type: String,
            default: 'draft',
            enum: ['draft', 'published', 'completed'],
        },
        isActive: {
            type: Boolean,
            required: true,
            default: true,
        },
        microLocation: {
            type: Object,
        },
        endUse: {
            type: String,
        },
        builtupArea: {
            type: Number,
        },
        otherLocation: {
            type: String,
        },
        floor: {
            type: String,
        },
        responses: [],
        customerType: {
            type: String,
        },
        negotiable: {
            type: Boolean,
        },
        mapEmbedUrl: {
            type: String,
        },
        zone: {
            type: Object,
        },
        featuredProperty: {
            type: Boolean,
            default: false,
        },
        propertyAgainstDemand: {
            type: Boolean,
            default: true,
        },
        nearByloactions: {
            type: Object,
        },
        gMapLatLong: [],
        bulkTimeStamp: {
            type: String,
        },
        
        productId: {
            type: Object,
        },
        leaseEscalationValue: { type: Number },
        leaseEscalationpercentage: { type: Number },
        bikeParking: { type: Number },
        carParking: { type: Number },
        totalFloors: { type: Number },
        cabins: { type: Number },
        meetingRooms: { type: Number },
        washRooms: { type: Number },
    },
    {
        timestamps: true,
        versionKey: false,
    },
);