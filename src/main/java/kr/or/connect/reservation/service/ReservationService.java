package kr.or.connect.reservation.service;

import java.util.List;

import kr.or.connect.reservation.dto.ReservationRequest;
import kr.or.connect.reservation.dto.ReservationResponse;

public interface ReservationService {
	public ReservationRequest addReservation(ReservationRequest reservation);

	public List<ReservationResponse> getReservation(String email);
}
