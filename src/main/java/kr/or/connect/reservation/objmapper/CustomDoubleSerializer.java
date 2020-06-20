package kr.or.connect.reservation.objmapper;

import java.io.IOException;
import java.text.SimpleDateFormat;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

public class CustomDoubleSerializer extends JsonSerializer<Double> {
	private static final Double EPS = 0.000001;
	
	public Boolean isValueZero(Double value) {
		double comValue = value - 0.0;
		if(comValue< 0) {
			comValue -= comValue;
		}
		
		if( comValue - 0.0 < EPS) {
			return true;
		}
		return false;
	}
	
	@Override
	public void serialize(Double value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
		if(isValueZero(value)) {
			gen.writeNumber(0);
			return;
		}

		gen.writeNumber(value);
	}

}
