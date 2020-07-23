package kr.or.connect.reservation.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kr.or.connect.reservation.dto.ReservationRequest;
import kr.or.connect.reservation.dto.ReservationResponse;
import kr.or.connect.reservation.service.ReservationService;

@RestController
@RequestMapping(path = "/api/reservations")
public class ReservationApiController {
	@Autowired
	private ReservationService rsvService;

	@PostMapping
	public ReservationRequest postBook(@RequestBody ReservationRequest reservation) {
		return rsvService.addReservation(reservation);
	}
	
	@GetMapping
	public Map<String, Object> getBook(String reservationEmail){
		Map<String, Object> rsvMap = new HashMap();
		
		List<ReservationResponse> responseList = rsvService.getReservation(reservationEmail);
		rsvMap.put("reservations", responseList);
		rsvMap.put("size", responseList.size());
		return rsvMap;
	}
}
